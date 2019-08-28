<template>
    <div>

        <div class="wrapper">
            <!-- <div class="top-icons">
                <i class="fas fa-long-arrow-alt-left"></i>
                <i class="fas fa-ellipsis-v"></i>
                <i class="far fa-heart"></i>
            </div> -->
            
            <div class="profile">
                <img src="../../assets/img/perfil3.jpg" class="thumbnail">
                <div class="check"><i class="fas fa-check"></i></div>
                <h3 class="name">{{ name }}</h3>
                <p class="title">Desarrollador JavaScript</p>
                <p class="description">
					Soy una persona que le gusta la tecnoligía y con una gran curiosidad de aprender nuevas formas
					de desarrollar software, asi brindar una gran experiencia al usuario y contribuir con la comunidad 
					<span style="font-weight: bold" >Open source</span>

				</p>
                <button type="button" class="btn btn-outline-primary  btn-pourple">Lenguajes</button>
            </div>
            
            <div class="social-icons">
                <div class="icon">
                    <a :href="socialMedia.twitter"  target="_blank"><i class="fab fa-twitter"></i></a>
                    <!-- <h4>12.8k</h4>
                    <p>Followers</p> -->
                </div>
                
                <div class="icon">
                    <a :href="socialMedia.github" target="_blank"><i class="fab fa-github" ></i></a>
                    <!-- <h4>12.8k</h4>
                    <p>Followers</p> -->
                </div>

				<div class="icon">
                    <a :href="socialMedia.linkedin" target="_blank"><i class="fab fa-linkedin" ></i></a>
                    <!-- <h4>12.8k</h4>
                    <p>Followers</p> -->
                </div>
                <div class="icon">
                    <a :href="socialMedia.instagram" target="_blank"><i class="fab fa-instagram"></i></a>                    
                </div>
                
            </div>
        </div>

        
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            name: 'Max Aqquepucho',
			socialMedia: {
				instagram: 'https://www.instagram.com/maxaqq',
				github: 'https://www.github.com/maxaqquepucho',
				linkedin: 'https://www.linkedin.com/in/max-romario-99340218a',
				twitter: 'https://www.twitter.com/maxaqq'
			}

        }
    }
    
}
</script>
<style lang="scss" scoped>
    
$purple-gradient: linear-gradient(45deg, rgba(87,29,146,1) 0%,rgba(172,25,102,1) 100%);
$purple-gradient: linear-gradient(to bottom right, #C90A6D, #FF48A0);
$blue1-gradient: linear-gradient(to bottom right, #5E5AEC, #3F9EFC);
$blue2-gradient: linear-gradient(to bottom right, #6452E9, #639FF9);
$black1-gradient: linear-gradient(to bottom right, #655d5d, #000000);
$lightBlue1-gradient: linear-gradient(to bottom right, #5db6f7, #448cf9);
$linkedin-gradient: linear-gradient(to bottom right, #2fa5e8, #006097);
$shadow: 0 13px 26px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.2);

// ------------------------------------------------

.customSlider {
  opacity: 0;
  display: none;
	+ label {
		position: relative;
		top: 35px;
		left: 15px;
		cursor: pointer;
		&:before, &:after {
			background: #FFFFFF;
			position: absolute;
			content: '';
		}
		&:before {
			top: -90px; left: -60px;
			width: 80px;
			height: 40px;
			background: #ccc;
			border-radius: 20px;
			transition: background .75s;
		}
		&:after {
			height: 34px; width: 34px;
			top: -87px; left: -55px;
			border-radius: 50%;
			transition: all .5s;
		}
	}
	
	&:checked + label:after {
		height: 34px; width: 34px;
		top: -87px; left: -19px;
		border-radius: 50%;
	}
	
	&:checked ~ .wrapper {
		color: #fff;
		transition: background .6s ease;
		background: #31394D;
		
		.top-icons {
			i {
				color: #fff;
			}
		}
		
		.profile {
			// &:after {background: #ececece;}
			.name {
				color: #FDFEFF;
			}
			
			.title {
				color: #7C8097;
			} 
			
			.description {
				color: #FDFEFF;
			}
		}
		.icon {
			h4 {
				color: #FFFFFF;
			}
			
			p {
				color: #666B7D;
			}
		}
	}
}

.wrapper {
    width: 320px;
    // height: 540px;
    background: #FDFEFF;
	transition: background .6s ease;
	border-radius: 10px;
	padding: 20px 20px 20px 20px;
	box-shadow: 0 8px 40px rgba(#000000, .2);
	
	.top-icons {
		i {
			color: #080911;
			&:nth-of-type(1) {
				float: left;
			}
			&:nth-of-type(2) {
				float: right;
			}
			&:nth-of-type(3) {
				float: right;
				padding-right: .8em;
			}
		}
	}
	.profile {
		// margin-top: 2.2em;
		position: relative;
		
		&:after {
			width: 100%;
			height: 1px;
			content: ' ';
			display: block;
			margin-top: 1.3em;
			background: #E9EFF6;
		}
		
		.check {
			position: absolute;
			right: 5em;
			bottom: 20.7em;
			i {
				color: #fff;
				width: 20px;
				height: 20px;
				font-size: 12px;
				line-height: 20px;
				text-align: center;
				border-radius: 100%;
				background: #424242;	
			}
		}
		.thumbnail {
			width: 124px;
			height: 124px;
			display: flex;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 1.5em;
			border-radius: 100%;
			box-shadow: $shadow;
		}
		.name {
			color: #2D354A;
			font-size: 24px;
			font-weight: 600;
			text-align: center;
		}
		
		.title {
			color: #7C8097;
			font-size: .75em;
			font-weight: 300;
			text-align: center;
			padding-top: .5em;
			padding-bottom: .7em;
			letter-spacing: 1.5px;
			text-transform: uppercase;
		}
		
		.description {
			color: #080911;
			font-size: 14px;
			font-weight: 300;
			text-align: center;
			margin-bottom: 1.3em;
		}
		
		// .btn {
		// 	color: #fff;
		// 	width: 130px;
		// 	height: 42px;
		// 	outline: none;
		// 	border: none;
		// 	display: block;
		// 	cursor: pointer;
		// 	font-weight: 300;
		// 	margin-left: auto;
		// 	margin-right: auto;
		// 	border-radius: 70px;
		// 	box-shadow: 0 13px 26px rgba(#000, .16), 0 3px 6px rgba(#000, .16);
		// 	background: $purple-gradient;
		// }

		.btn-pourple {
			color: #7952b3;
			border-color: #7952b3;
			border-radius: 25px;
			padding: 7px 18px 7px 18px
		}

		.btn-pourple:hover {
			color: #fff;
		    background-color: #7952b3;
    		border-color: #7952b3;
		}
	}
	
	.social-icons {
		display: flex;
		margin-top: 1.2em;
		justify-content: space-between;
		
		.icon {
			display: flex;
			align-items: center;
			flex-direction: column;
			a {
				color: #fff;
				width: 50px;
				height: 50px;
				font-size: 23px;
				line-height: 51px;
				text-align: center;
				border-radius: 30px;
				box-shadow: $shadow;
			}
			&:nth-of-type(1) {
				a {
					background: $lightBlue1-gradient;
				}
			}
			&:nth-of-type(2) {
				a {
					background: $black1-gradient;
				}
			}
			&:nth-of-type(3) {
				a {
					background: $linkedin-gradient;
				}
			}
			&:nth-of-type(4) {
				a {
					background: $purple-gradient;
				}
			}
			
			h4 {
				color: #080911;
				font-size: 1em;
				margin-top: 1.3em;
				margin-bottom: .2em;
			}
			
			p {
				color: #666B7D;
				font-size: 12px;		
			}
		}
	}
}

    .concept {
        position: absolute;
        bottom: 25px;
        color: #AAB0C4;
        font-size: .9em;
        font-weight: 400;
        a {
            color: rgba(172,25,102,1);
            text-decoration: none;
        }
    }
</style>