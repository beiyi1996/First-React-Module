import React, { Component } from "react";
import "../Calender.css";

class dayPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: "",
      Data: [
        {
          date: "12/27(一)",
          details: [
            {
              id: 1,
              content: "- -"
            },
            {
              id: 2,
              content: "$15,568起"
            },
            {
              id: 3,
              content: "$15,568起"
            },
            {
              id: 4,
              content: "$15,568起"
            },
            {
              id: 5,
              content: "$15,568起"
            },
            {
              id: 6,
              content: "$15,568起"
            },
            {
              id: 7,
              content: "$15,568起"
            }
          ]
        },
        {
          date: "12/28(二)",
          details: [
            {
              id: 8,
              content: "$15,568起"
            },
            {
              id: 9,
              content: "$15,568起"
            },
            {
              id: 10,
              content: "$15,568起"
            },
            {
              id: 11,
              content: "$15,568起"
            },
            {
              id: 12,
              content: "$15,568起"
            },
            {
              id: 13,
              content: "$15,568起"
            },
            {
              id: 14,
              content: "$15,568起"
            }
          ]
        },
        {
          date: "12/29(三)",
          details: [
            {
              id: 15,
              content: "查看"
            },
            {
              id: 16,
              content: "$15,568起"
            },
            {
              id: 17,
              content: "$15,568起"
            },
            {
              id: 18,
              content: "$15,568起"
            },
            {
              id: 19,
              content: "$15,568起"
            },
            {
              id: 20,
              content: "$15,568起"
            },
            {
              id: 21,
              content: "$15,568起"
            }
          ]
        },
        {
          date: "12/31(五)",
          details: [
            {
              id: 22,
              content: "查看"
            },
            {
              id: 23,
              content: "查看"
            },
            {
              id: 24,
              content: "$15,568起"
            },
            {
              id: 25,
              content: "$15,568起"
            },
            {
              id: 26,
              content: "$15,568起"
            },
            {
              id: 27,
              content: "$15,568起"
            },
            {
              id: 28,
              content: "$15,568起"
            }
          ]
        },
        {
          date: "01/01(六)",
          details: [
            {
              id: 29,
              content: "查看"
            },
            {
              id: 30,
              content: "查看"
            },
            {
              id: 31,
              content: "查看"
            },
            {
              id: 32,
              content: "$15,568起"
            },
            {
              id: 33,
              content: "$15,568起"
            },
            {
              id: 34,
              content: "$15,568起"
            },
            {
              id: 35,
              content: "$15,568起"
            }
          ]
        },
        {
          date: "01/01(六)",
          details: [
            {
              id: 36,
              content: "查看"
            },
            {
              id: 37,
              content: "查看"
            },
            {
              id: 38,
              content: "查看"
            },
            {
              id: 39,
              content: "查看"
            },
            {
              id: 40,
              content: "$15,568起"
            },
            {
              id: 41,
              content: "$15,568起"
            },
            {
              id: 42,
              content: "$15,568起"
            }
          ]
        },
        {
          date: "01/02(日)",
          details: [
            {
              id: 43,
              content: "查看"
            },
            {
              id: 44,
              content: "查看"
            },
            {
              id: 45,
              content: "查看"
            },
            {
              id: 46,
              content: "查看"
            },
            {
              id: 47,
              content: "查看"
            },
            {
              id: 48,
              content: "$15,568起"
            },
            {
              id: 49,
              content: "$15,568起"
            }
          ]
        }
      ]
    };
    this.RefDom = React.createRef();
  }

  checkcolClass = item => {
    let show = this.props.show;
    const activeId = this.state.activeId;
    var classname = "dailyprice col-" + show;
    if (activeId === item.id) {
      classname += " active ";
    }
    for (let i = 1; i <= 7; i++) {
      // console.log("item.id is", item.id, "activeid is");
      if (item.id === activeId - 7 * i || item.id === activeId + 7 * i) {
        // console.log("item.id is", item.id, "activeid is", activeId);
        classname += " gray-background ";
      }
    }
    if (item.id === 3 || item.id === 14 || item.id === 34) {
      // console.log("最便宜!!!");
      classname += " triangle ";
    }
    return classname;
  };
  // activeId === item.id ? classes + ' active ' : classes

  render() {
    const activeId = this.state.activeId;

    return (
      <React.Fragment>
        {this.state.Data.map((items, i) => (
          <div
            key={i}
            className={
              items.details.some(function(ele) {
                return ele.id === activeId;
              })
                ? "weekprice gray-background"
                : "weekprice"
            }
          >
            {items.details.map(item => (
              <div
                key={item.id}
                ref={this.RefDom}
                className={this.checkcolClass(item)}
                onClick={() => {
                  this.setState({ activeId: item.id }, () => {
                    return console.log("you click", this.RefDom.current);
                  });
                }}
              >
                {item.content}
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default dayPrice;
