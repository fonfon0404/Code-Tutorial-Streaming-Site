const express = require("express");
const bodyParser = require('body-parser');
const database = require("../../database.js");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

/* Get: admin index */
router.get("/", function(req, res) {
  if(req.session.loggedin != true) {
    res.redirect('login');
  }

  if(req.session.user !== "admin") {
    res.redirect('home');
  }

  let pageNum = req.query.page;
  let searchType = req.query.searchType;
  let query;

  if(searchType === 'all' || searchType == null) {
    searchType = 'all';
    query = 'SELECT * FROM video Order By publishDate DESC;';
  }
  else {
    //
    query = ("SELECT * FROM video where type = '" + searchType + "' Order By publishDate DESC;");
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
    
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 15; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/admin', {
      data: dataList,
      pager: pager,
      searchType: searchType
    });
  })
});

/* Post: add record */
router.post("/add", function(req, res){
    let val = req.body;
    let query = 'INSERT INTO video VALUE (?,?,?,?,?,?,?)';

    database.query(query, 
      [val.videoId, val.videoType, val.videoName, val.viewCount, val.likeCount, val.publishDate, val.duration], 
      function(error, data){
        if(error) {
          throw error;
        }

      console.log(val.videoId + ' added'); //logging
    })      
    res.redirect('/admin'); // Post-Redirect-Get
});

/* Post: delete record */
router.post("/delete", function(req, res){
    let val = req.body;
    let query = 'DELETE FROM video WHERE vid = ?';

    database.query(query, 
        [val.videoId], 
        function(error, data){
      if(error) {
        throw error;
      }

      console.log(val.videoId + ' deleted'); // logging
    })
    res.redirect('/admin'); // Post-Redirect-Get
});

/* Post: update record */
router.post("/update", function(req, res){
    let val = req.body;
    let query = "UPDATE video SET vid=?,type=?,vname=?,viewCount=?,likeCount=?,publishDate=?,duration=? WHERE vid=?";

    database.query(query, 
        [val.videoId, val.videoType, val.videoName, val.viewCount, val.likeCount, val.publishDate, val.duration, val.videoId], 
        function(error, data){
        if(error) {
            throw error;
        }

        console.log(val.videoId + ' updated'); // logging
    })
    res.redirect('/admin'); // Post-Redirect-Get
});

/* Post: search by type */
router.post("/search", function(req, res){
    let val = req.body;
    
    res.redirect('/admin?searchType=' + val.videoType); 
});

module.exports = router;