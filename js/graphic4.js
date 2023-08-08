//Edit 'key' and 'columns' to connect your spreadsheet
//enter google sheets key here

// Comment: Did not end up needing this
/*var key =
  "19tXrwQhvvsaL7-5xk5KlBDrOriXMp-eem0fmu_pMgh8";*/

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

    function initPapa() {
          Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vS7Ry8HbC43mRFfhYUrKkNUYuXgJqS4HC3c7fr23aNYBuOrYOn1bHs81-Lms1reWZasQ9oKLFAxPI4Y/pub?output=csv', {
          download: true,
          header: true,
          complete: function(results) {
            var data = results.data
            writeTable(data)
          }
        })
    }

  initPapa();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-condensed table-responsive compact" id="jobs2024"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#jobs2024").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "columnDefs": [
        {"className": "dt-center", "targets": "_all"},
        { "width": "4%", "targets": 1 },
        { "width": "2%", "targets": 2 },
        { "width": "7%", "targets": 5 },
        { "width": "5%", "targets": 6 },
        { "width": "20%", "targets": 7 },
        { "width": "2%", "targets": 8 }],
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
