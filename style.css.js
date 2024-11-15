body {
  background-image: url("images/Bedroom.jpeg");
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.bright {
  opacity: 0.6;
}

.center-content {
  justify-content: center;
  align-items: center;
  display: flex;
}

.column {
  height: 100%;
  width: 40%;
  display: block;
}
.rectangle {
  height: 75%;
  width: 100%;
}
.long {
  height: 100%;
  width: 50%;
}
.column2 {
  height: 25%;
  width: 100%;
  display: flex;
}

.row {
  height: 100%;
  width: 60%;
  display: flex;
}
.big {
  height: 100%;
  width: 50%;
  display: block;
}
.small {
  height: 100%;
  width: 50%;
  display: block;
}
.square {
  height: calc(100% / 3);
  width: 100%;
}

.clickable {
  filter: brightness(85%) drop-shadow(2px 8px 3px);
}

.clickable:hover {
  cursor: pointer;
  filter: brightness(100%) drop-shadow(2px 8px 3px);
}

.clickable:active {
  filter: drop-shadow(0px 0px 3px);
  transform: scale(0.98);
}

.changing-image {
  content: url("images/Wooden-Panel.jpeg");
}
.display-none {
  display: none;
}

@media only screen and (max-width: 800px) {
  body {
    display: block;
  }
  .column {
    height: 50%;
    width: 100%;
  }
  .row {
    height: 50%;
    width: 100%;
  }
}

@media only screen and (max-width: 400px) {
  .column {
    height: 70%;
  }
  .row {
    height: 100%;
    display: block;
  }
  .big {
    width: 100%;
  }
  .small {
    width: 100%;
  }
  body {
    background-repeat: repeat;
  }
}
