import React, { Component } from "react";
import Dayprice from "./components/dayprice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideLeftbtn: false,
      hideRightbtn: true,
      slide: this.props.slide,
      firstDiv: 1
    };
    this.firstDiv = 1;
    this.slidedLength = 0;
  }

  handleScrollRight = () => {
    let width = this.scrollView.offsetWidth;
    let show = parseInt(this.props.show);
    let slide = parseInt(this.props.slide);
    let oneDivWidth = width / show;
    let lastDiv = 7 - show + 1;
    // console.log(
    //   "slide  ",
    //   slide,
    //   "firstDiv  ",
    //   this.firstDiv,
    //   "lastDiv  ",
    //   lastDiv,
    //   "this.slidedLength  ",
    //   this.slidedLength,
    //   "oneDiv  ",
    //   oneDivWidth,
    //   "show  ",
    //   show
    // );

    this.firstDiv = this.firstDiv + slide;
    if (show >= slide) {
      this.setState({
        hideLeftbtn: true
      });
      console.log("second firstDiv", this.firstDiv);
      if (this.firstDiv >= lastDiv) {
        //當滑動格數到最後可以顯示的格數
        console.log("進 右邊 判斷!!!");
        this.slidedLength = 0 - oneDivWidth * (7 - show); //讓滑動的總長度等於
        console.log("最後的長度", this.slidedLength);
        this.setState({
          hideRightbtn: false
        });
      } else {
        this.slidedLength += 0 - oneDivWidth * slide;
        console.log("繼續累加的長度", this.slidedLength);
      }
    } else {
      console.log("您設定的滑動個數不得大於顯示個數!!");
    }
  };

  handleScrollLeft = () => {
    let width = this.scrollView.offsetWidth;
    let show = parseInt(this.props.show);
    let slide = parseInt(this.props.slide);
    let oneDivWidth = width / show;
    let lastDiv = 1;

    this.firstDiv = this.firstDiv - slide;
    this.setState({
      hideRightbtn: true,
      hideLeftbtn: true
    });
    if (this.firstDiv === lastDiv) {
      console.log("進 左邊 的判斷!!!");
      this.slidedLength = 0;
      this.setState({
        hideLeftbtn: false
      });
    } else {
      this.slidedLength += oneDivWidth * slide;
    }
    console.log("Left - firstDiv ", this.firstDiv, "Left - lastDiv ", lastDiv);
  };

  slideAnimation(oneDivWidth, slide) {
    const _scrollView = this.scrollView;
    let pop = 0;
    let id = setInterval(frame, 10);

    function frame() {
      if (pop === slide / 1000) {
        console.log(slide / 1000);
        clearInterval(id);
      } else {
        if (_scrollView) {
          pop += 0.001;
          console.log("scrollView is working!!");
          console.log("pop is ", pop);
          _scrollView.scrollLeft += oneDivWidth * slide;
          console.log("oneDivWidth", oneDivWidth, "slide", slide);
          console.log("scrollLeft ", _scrollView.scrollLeft);
          _scrollView.scrollIntoView({ behavior: "smooth" });
          // console.log(_scrollView);
        }
      }
    }
  }

  render() {
    let show = this.props.show;
    let col = "col-" + show;
    let speed = parseInt(this.props.speed);
    let slidedLength = parseInt(this.slidedLength);

    const style = {
      transform: "translatex(" + slidedLength + "px)",
      transition: "." + speed + "s ease-in-out"
    };

    return (
      <div className="App">
        <div className="container">
          <span
            className={
              this.state.hideLeftbtn === true ? "left-btn" : "left-btn hide"
            }
            onClick={this.handleScrollLeft}
            onScroll={this.handleScroll}
          >
            &#8249;
          </span>
          <span
            className={
              this.state.hideRightbtn !== true ? "hide right-btn" : "right-btn"
            }
            onClick={this.handleScrollRight}
          >
            &#8250;
          </span>
          <div className="Leftblock">
            <div className="dateCol">
              <span> 回程 </span> <span> 去程 </span>
            </div>
            <div className="dateCol col-3"> 12 / 27(一) </div>
            <div className="dateCol col-3"> 12 / 28(二) </div>
            <div className="dateCol col-3"> 12 / 29(三) </div>
            <div className="dateCol col-3"> 12 / 30(四) </div>
            <div className="dateCol col-3"> 12 / 31(五) </div>
            <div className="dateCol col-3">
              <div className="nextYear">
                <span> 01 / 01(六) </span>
              </div>
            </div>
            <div className="dateCol col-3"> 01 / 02(日) </div>
          </div>
          <div className="Rightblock">
            <div
              className="slider-div"
              ref={scrollView => (this.scrollView = scrollView)}
              style={style}
            >
              <div className="weekprice">
                <div className={"dateRow " + col}> 12 / 27(一) </div>
                <div className={"dateRow " + col}> 12 / 28(二) </div>
                <div className={"dateRow " + col}> 12 / 29(三) </div>
                <div className={"dateRow " + col}> 12 / 30(四) </div>
                <div className={"dateRow " + col}> 12 / 31(五) </div>
                <div className={"dateRow " + col}>
                  <div className="nextYear">
                    <span> 01 / 01(六) </span>
                  </div>
                </div>
                <div className={"dateRow " + col}> 01 / 02(日) </div>
              </div>
              <Dayprice show={this.props.show} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
