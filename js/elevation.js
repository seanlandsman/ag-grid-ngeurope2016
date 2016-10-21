var columnDefs = [
    {
        headerName: "Column 1",
        field: "col1"
    },
    {
        headerName: "Column 2",
        field: "col2",
        // example of a simple renderer
        cellRenderer: (params) => {
            return '<span style="color: orangered">' + params.value + '</span>';
        }
    }
];

var rowData = [
    {col1: "Row 1, Column 1", col2: "Row 1, Column 2"},
    {col1: "Row 2, Column 1", col2: "Row 2, Column 2"}
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    onGridReady: () => {
        gridOptions.api.sizeColumnsToFit();
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // only needed for ag-Grid Enterprise
    agGrid.LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");

    // create the grid
    var eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);

/*
    // simple method to get load and set the json data
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', './incidentsWithElevation.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
        }
    };
*/
});
