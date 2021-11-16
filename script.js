@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*, *:before, *:after{
    margin: 0;
	padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    border: none;
    outline: none
}
body{
    height: 100vh;
    background: linear-gradient(135deg, #e4f150, #eb28f1)
}
.main{
    position: absolute;
    padding: 50px 30px;
    width: 80vmin;
    top: 50%;
    left: 50%;
    border-radius: 9px;
    transform: translate(-50%,-50%);
    background-color: #fff;
    box-shadow: 0 20px 25px rgba(60,60,100,0.15)
}
#output-color{
    width: 100%;
    height: 35vmin;
    border-radius: 6px
}
#output-code{
    margin: 20px 0 40px 0;
    padding: 15px 10px;
    width: 100%;
    font-size: 2.3vmin;
    font-weight: 400;
    color: #3f415f;
    border-radius: 5px;
    background: #fcf1fb;
}
.btn-container{
    display: flex;
    justify-content: space-around
}
.btn-container button{
    min-width: 40%;
    padding: 15px 0;
    color: #ffffff;
    border-radius: 30px;
    font-size: 2.6vmin;
    font-weight: 500;
    background: linear-gradient(300deg, #fb82f8, #4dcfac);
	background-size: 200%;
    transition: 450ms
}
.btn-container button:hover{
	background-size: 100%;
    cursor: pointer
}

@media (max-width: 768px){
	body{
		background-repeat: no-repeat
	}
	.main{
		width: 31rem
	}
	#output-color{
		height: 46vmin
	}
	#output-code{
		font-size: 10px
	}
	.btn-container button{
		padding: 20px;
	}
}
