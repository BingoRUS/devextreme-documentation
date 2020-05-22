var appointments = [
    {
        text: 'Website Re-Design Plan',
        startDate: new Date(2015, 4, 25, 9, 0),
        endDate: new Date(2015, 4, 25, 11, 30)
    },
    {
        text: 'Approve Personal Computer Upgrade',
        startDate: new Date(2015, 4, 26, 10, 0),
        endDate: new Date(2015, 4, 26, 11, 0)
    },
    {
        text: 'Install New Database',
        startDate: new Date(2015, 4, 27, 9, 45),
        endDate: new Date(2015, 4, 27, 11, 15)
    },
    {
        text: 'Prepare Marketing Plan',
        startDate: new Date(2015, 4, 28, 11, 0),
        endDate: new Date(2015, 4, 28, 13, 30)
    },
    {
        text: 'Launch New Website',
        startDate: new Date(2015, 4, 29, 10, 20),
        endDate: new Date(2015, 4, 29, 12, 0)
    }
];
//<!--@Knockout-->
var myViewModel = {
    schedulerData: appointments,
    addingHandler: function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Add appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    },
    updatingHandler: function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Update appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    },
    deletingHandler: function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Delete appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    }
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.schedulerData = appointments;
    $scope.currentDate = new Date(2015, 4, 25);
    $scope.addingHandler = function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Add appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    };
    $scope.updatingHandler = function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Update appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    };
    $scope.deletingHandler = function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Delete appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myScheduler").dxScheduler({
    dataSource: appointments,
    startDayHour: 9,
    endDayHour: 18,
    currentView: 'week',
    currentDate: new Date(2015, 4, 25),
    height: 650,
    onAppointmentAdding: function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Add appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    },
    onAppointmentUpdating: function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Update appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    },
    onAppointmentDeleting: function (e) {
        e.cancel = $.Deferred();
        DevExpress.ui.dialog.confirm("Delete appointment?", "Confirm").done(function (dialogResponse) {
            e.cancel.resolve(!dialogResponse);
        });
    }

});
//<!--/@jQuery-->