let mpydao = {
    readfile: function () {
        console.log('123')
    },

    savefile: function () {
        this.readfile()
    },

    runfile: function () {

    },

    deletefile : function (filename) {
        console.log(filename)
    }

}

mpydao.deletefile('567')