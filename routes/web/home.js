const express = require("express");
const database = require("../../database.js");
const router = express.Router();

/*HOME PAGE*/
router.get("/", function(req, res){
  res.redirect("/home");
});

/*HOME PAGE: All category*/
router.get("/home", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/*HOME PAGE: C++ category*/
router.get("/cpp", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Where type = 'cpp' Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Where type = 'cpp' Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Where type = 'cpp' Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Where type = 'cpp' Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Where type = 'cpp' Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/*HOME PAGE: Java category*/
router.get("/java", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Where type = 'java' Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Where type = 'java' Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Where type = 'java' Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Where type = 'java' Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Where type = 'java' Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/*HOME PAGE: Javascript category*/
router.get("/javascript", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Where type = 'javascript' Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Where type = 'javascript' Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Where type = 'javascript' Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Where type = 'javascript' Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Where type = 'javascript' Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/*HOME PAGE: SQL category*/
router.get("/sql", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Where type = 'sql' Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Where type = 'sql' Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Where type = 'sql' Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Where type = 'sql' Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Where type = 'sql' Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/*HOME PAGE: ASP category*/
router.get("/asp", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Where type = 'asp' Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Where type = 'asp' Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Where type = 'asp' Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Where type = 'asp' Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Where type = 'asp' Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/*HOME PAGE: Python category*/
router.get("/python", function(req, res){
  let pageNum = req.query.page;
  let sortby = req.query.sortby || 'default';
  let query;

  switch(sortby) {
    case 'publishDate':
      query = "Select vid From video Where type = 'python' Order By publishDate DESC;";
      break;
    case 'duration':
      query = "Select vid From video Where type = 'python' Order By duration DESC;";
      break;
    case 'viewCount':
      query = "Select vid From video Where type = 'python' Order By viewCount DESC;";
      break;
    case 'rating':
      query = "Select vid From video Where type = 'python' Order By (likeCount/viewCount) DESC;";
      break;
    default:
      query = "Select vid From video Where type = 'python' Order By publishDate DESC;";
  }

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager,
      sortby: sortby
    });
  });
});

/* LOG IN */
router.get("/login", function(req, res){
  if(req.session.loggedin != true) {
    res.render("home/login");
  }
  
  if(req.session.user === 'admin') {
    res.redirect("./admin");
  }

  else {
    res.redirect("/");
  }
});

/* LOG OUT */
router.get("/logout", function(req, res){
  if(req.session) {
    req.session.destroy(error => {
      if(error) {
        res.status(400).send('Unable to log out');
        console.log('log out error'); // logging
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.end();
  }
});

router.get("/signup", function(req, res){
  res.render("home/signup");
});

module.exports = router;