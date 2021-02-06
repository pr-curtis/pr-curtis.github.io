//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "1Q0M0Y8W_8kr5JYY08SCNJECTDKxbGj1Md7zMyFMIFng";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [
  { "data": "Institution", "title": "Institution" },
  { "data": "SchoolType", "title": "School Type" },
  { "data": "Track", "title": "Track" },
  { "data": "DesiredDiscipline", "title": "Desired Discip." },
  { "data": "DesiredRegion", "title": "Desired Region" },
  { "data": "Location", "title": "Location" },
  { "data": "Period", "title": "Period" },
  { "data": "Keywords", "title": "Keywords" },
  { "data": "URL", "title": "URL",  "fnCreatedCell": function(nTd, sData, oData, iRow, iCol){
    $(nTd).html("<a href='"+oData.URL+"'>URL</a>");
  }}
];


$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive compact" id="jobs2021"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#jobs2021").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "columnDefs": [
        {"className": "dt-center", "targets": "_all"}, { "width": "25%", "targets": 7 }, { "width": "7%", "targets": 8 }],
      "order": [
        [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
