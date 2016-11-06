$(function() {
    
    var _this = this;

    $.ajax({
        url: 'https://api.500px.com/v1/photos',
        type: 'GET',
        data: 'feature=user&username=vdmrox&image_size[]=1600&consumer_key=vAMt0eQivXBPXkUK85U555aQbRagPMMNxygKnKcZ',
        success: function(res) { 
            _this.photoArray = res.photos;
            slide();
        }
    });

    function slide () {

        $('.slides').vegas({
            delay: 10000,
            preloadImage:true,
            timer: true,
            shuffle: true,    
            transition: ['flash'],
            transitionDuration: 3000,
            slides: [
                { src: _this.photoArray[0].image_url[0] },
                { src: _this.photoArray[1].image_url[0] },
                { src: _this.photoArray[2].image_url[0] },
                { src: _this.photoArray[4].image_url[0] },
                { src: _this.photoArray[5].image_url[0] },
                { src: _this.photoArray[6].image_url[0] },
                { src: _this.photoArray[7].image_url[0] },
                { src: _this.photoArray[8].image_url[0] },
                { src: _this.photoArray[9].image_url[0] },
                { src: _this.photoArray[10].image_url[0] },
                { src: _this.photoArray[11].image_url[0] },
                { src: _this.photoArray[12].image_url[0] },
                { src: _this.photoArray[13].image_url[0] },
                { src: _this.photoArray[14].image_url[0] },
                { src: _this.photoArray[15].image_url[0] },
                { src: _this.photoArray[16].image_url[0] },
                { src: _this.photoArray[17].image_url[0] },
                { src: _this.photoArray[18].image_url[0] },
                { src: _this.photoArray[19].image_url[0] }
            ],
            overlay: '/images/overlays/01.png',
            animation: 'kenburns',
            animationDuration: 11000
        });
    }
});
