// only needed for ag-Grid Enterprise
agGrid.LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");

agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function ($scope) {

    var columnDefs = [
        {
            headerName: "Column 1",
            field: "col1"
        },
        {
            headerName: "Column 2",
            field: "col2",
            // example of a simple renderer
            cellRenderer: col2CellRendererFunc
        }
    ];

    var rowData = [
        {col1: "Row 1, Column 1", col2: "Row 1, Column 2"},
        {col1: "Row 2, Column 1", col2: "Row 2, Column 2"}
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        angularCompileRows: true,            // optional
        onGridReady: () => {
            $scope.gridOptions.api.sizeColumnsToFit();
        }
    };

    function col2CellRendererFunc(params) {
        return '<span ng-style="{color:\'orangered\'}" ng-bind="data.col2"></span>';
    }

/*
    // simple method to get load and set the json data
    $http.get("./incidentsWithElevation.json")
        .then(function (res) {
            $scope.gridOptions.api.setRowData(res.data);
        });
*/
});

