


function shipMoving (x, y){ 

    let shipMoving = document.getElementById("ship");
    
        let right = false,
            left = false,
            shoot = false
        
    document.addEventListener('keydown', press)
        function press(event){
            if (event.keyCode === 39){
                right = true
            } 
            if (event.keyCode === 37){
                left = true 
            }
            if (event.keyCode === 32){
                shoot = true
            }
        } 
    document.addEventListener('keyup', release)
        function release(event){
            if (event.keyCode === 39){
                right = false
            } 
            if (event.keyCode === 37){
                left = false 
            }    
            if (event.keyCode === 32){
                shoot = false
            }
        }
    }