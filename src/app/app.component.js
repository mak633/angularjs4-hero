"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var todos = [
    {
        title: "task 1",
        completed: true
    },
    {
        title: "task 2",
        completed: false
    },
    {
        title: "task 3",
        completed: false
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Hero';
        this.todos = todos;
    }
    AppComponent.prototype.toggle = function (todo) {
        todo.completed = !todo.completed;
    };
    AppComponent.prototype.delete = function (todo) {
        var index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map