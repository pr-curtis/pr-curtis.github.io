---
layout: page0
title: Job Market Data 2020-2021
permalink: /projects/jobssearch2021/
---
<script>
$(document).ready(function() {
    $('#graphic').DataTable( {
        data: dataSet,
        columns: [
            { title: "Institution" },
            { title: "Public/Private" },
            { title: "School Type" },
            { title: "Track" },
            { title: "Desired Discipline" },
            { title: "Desired Region" },
            { title: "Location" },
            { title: "Continental Region" },
            { title: "Period" },
            { title: "Posting" }
        ]
    } );
</script>

   <table id="graphic" class="display"></table>
