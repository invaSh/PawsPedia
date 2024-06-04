import * as PIXI from "../js/pixi.min";

let app
window.onload = function(){
    app = new PIXI.Application(
        {
            Width: 800,
            height: 600,
            backgroundColor: 0xAAAAAA
        }
    )

    document.body.appendChild(app.view);
}