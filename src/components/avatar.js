import { Component } from "react";

class Avatar extends Component {

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    componentDidMount(){
        const mainDiv = document.querySelector(".mainAvatar")
        const changeStyle = document.querySelector(".changeStyle")
        const eye = document.querySelector(".eye1")
        const eye1 = document.querySelector('.eye')

        const changeFace = document.getElementById('changeSmile')
        let index = 2
        this.setStyle(mainDiv)
        changeStyle.addEventListener('click', e=>{
            this.setStyle(mainDiv)
        })
        changeFace.addEventListener('click',e=>{
            this.setFace(eye,index)
            this.setFace(eye1,index)
            index++
        })
    }
    getColor(){
        let color = Math.round(this.getRandomArbitrary(1,257))
        return color
    }
    getDegree(){
        let deg = Math.round(this.getRandomArbitrary(1,360))
        return `${deg}deg`
    }
    setStyle(mainDiv){
        mainDiv.style.background = `linear-gradient(${this.getDegree()}, rgb(${this.getColor()},${this.getColor()},${this.getColor()}),rgb(${this.getColor()},${this.getColor()},${this.getColor()}),rgb(${this.getColor()},${this.getColor()},${this.getColor()}))`

    }
    setFace(elements, index){
        if(index %2 === 0){
            elements.style.width = "2vh"
            elements.style.height = "0.5vh"
        } else{
            elements.style.width = "1vh"
            elements.style.height = "1vh"
        }
    }
    render(){
        return <>
            <div className="mainAvatar">
                <div className="eyes">
                    <div className="eye1"></div>
                    <div className="eye"></div>
                </div>
                <div className="smile">

                </div>
            </div>
            <div className="changeStyle">
                Изменить цвет
            </div>
            <div className="changeStyle" id="changeSmile">
                Изменить лицо
            </div>
        </>
    }
}
export default Avatar