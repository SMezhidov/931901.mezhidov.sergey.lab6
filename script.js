        let RightIMG = document.querySelector("#RightIMG");
        let LeftIMG = document.querySelector("#LeftIMG");
        let Right1 = document.querySelector("#Right");
        let Left1 = document.querySelector("#Left");

        Left = () =>
        {
            RightIMG.style.display="none";
            LeftIMG.style.display="block";
            Left1.style.width="800px";
            Right1.style.width="0";
        }

        Both = () =>
        {
            RightIMG.style.display="block";
            LeftIMG.style.display="block";
            LeftIMG.style.width="400px";
            RightIMG.style.width="400px";
            Left1.style.width="400px";
            Right1.style.width="400px";
        }

        Right = () =>
        {
            LeftIMG.style.display="none";
            RightIMG.style.display="block";
            Right1.style.width="800px";
            Left1.style.width="0";
        }
