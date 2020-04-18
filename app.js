new Vue({
    el : '#vue-app',
    data:{
        name:'Seven Segment Display',
        para:'The Seven Segment Display to display digits 0-9',
        nums : [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b]
    },
    mounted(){
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d")
        ctx.strokeStyle = "rgb(114,110,110)";
        //A
        ctx.strokeRect(160, 0, 68, 8);
        //F
        ctx.strokeRect(150, 10, 8, 68);
        //B
        ctx.strokeRect(230, 10, 8, 68);
        //E
        ctx.strokeRect(150, 90, 8, 68);
        //C
        ctx.strokeRect(230, 90, 8, 68);
        //G
        ctx.strokeRect(160, 80, 68, 8);
        //D
        ctx.strokeRect(160, 160, 68, 8);
    },
    methods:{ 
        draw(){
            var val = document.getElementById("number").value;
            val= Number(val);
            var temp = this.nums[val];
            this.segment(temp); 
        } ,
        segment(temp){
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d")
            if((temp>>6) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(160, 0, 68, 8);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(160, 0, 68, 8);
            }
            if((temp>>5) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(230, 10, 8, 68);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(230, 10, 8, 68);
            }
            if((temp>>4) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(230, 90, 8, 68);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(230, 90, 8, 68);
            }
            if((temp>>3) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(160, 160, 68, 8);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(160, 160, 68, 8);
            }
            if((temp>>2) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(150, 90, 8, 68);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(150, 90, 8, 68);
            }
            if((temp>>1) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(150, 10, 8, 68);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(150, 10, 8, 68);
            }
            if((temp>>0) & 1){
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillRect(160,   80, 68, 8);
            }
            else{
                ctx.fillStyle = "rgb(0,0,0)"
                ctx.fillRect(160,   80, 68, 8);
            }
        }
    }
});

