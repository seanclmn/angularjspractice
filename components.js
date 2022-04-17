app.component('component',{
    templateUrl: '/components/component/component.html',
    controller: function componentController(){
        this.string = "component string"
    }
})

app.component('text',{
    templateUrl: '/components/text/text.html',
    controller: function textController(){
        this.string = 'string'
    }
})