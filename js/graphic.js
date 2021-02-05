//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRaFYd4IFyrOmY8d5DFWj7rCDpTXQBi59RcXmILsHuQXtviKGLTyf3kiv2n6c8FuUudKteSHpIDfhzu/pubhtml";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [
  { "data": "Institution", "title": "Institution" },
  { "data": "PublicPrivate", "title": "Public/Private" },
  { "data": "SchoolType", "title": "School Type" },
  { "data": "Track", "title": "Track" },
  { "data": "DesiredDiscipline", "title": "Desired Discipline" },
  { "data": "DesiredRegion", "title": "Desired Region" },
  { "data": "Location", "title": "Location" },
  { "data": "ContinentalRegion", "title": "Continental Region" },
  { "data": "Period", "title": "Period" },
  { "data": "Posting", "title": "Posting" }
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
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive" id="jobs2021"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#jobs2021").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
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
