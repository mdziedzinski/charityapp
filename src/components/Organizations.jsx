import React, { useState } from "react";
import style from "../scss/components/Organizations.module.scss";
import decoration from "../assets/Decoration.svg";

const Organizations = () => {
  const [toggleBtnState, setToggleBtnState] = useState(1);

  const toggleBtn = (index) => {
    setToggleBtnState(index);
  };

  const [toggleTabState, setToggleTabState] = useState(1);

  const toggleTab = (index) => {
    setToggleTabState(index);
  };

  return (
    <div className={style.container} id="organizations">
      <h2>Who do we help</h2>
      <img src={decoration} className={style.decoration} alt="decoration"></img>
      <div className={style.buttons}>
        <button
          className={style.mainBtn}
          style={
            toggleBtnState === 1
              ? { borderColor: "black" }
              : { borderColor: "transparent" }
          }
          id="foundationsBtn"
          onClick={() => toggleBtn(1)}
        >
          Foundations
        </button>
        <button
          className={style.mainBtn}
          id="ngosBtn"
          style={
            toggleBtnState === 2
              ? { borderColor: "black" }
              : { borderColor: "transparent" }
          }
          onClick={() => toggleBtn(2)}
        >
          NGOs
        </button>
        <button
          className={style.mainBtn}
          style={
            toggleBtnState === 3
              ? { borderColor: "black" }
              : { borderColor: "transparent" }
          }
          id="charitiesBtn"
          onClick={() => toggleBtn(3)}
        >
          Local charities
        </button>
      </div>
      <div
        className={style.tab}
        style={
          toggleBtnState === 1 ? { display: "block" } : { display: "none" }
        }
      >
        <p className={style.description}>
          {" "}
          In our database you will find a list of verified foundations with
          which we cooperate. You can check what they do, who they help and what
          they need.
        </p>
        <div>
          <div
            style={
              toggleTabState === 1 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>

          <div
            style={
              toggleTabState === 2 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>

          <div
            style={
              toggleTabState === 3 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Foundation page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>
          <div className={style.pagination}>
            <button
              style={
                toggleTabState === 1
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(1)}
            >
              1
            </button>
            <button
              style={
                toggleTabState === 2
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(2)}
            >
              2
            </button>
            <button
              style={
                toggleTabState === 3
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(3)}
            >
              3
            </button>
          </div>
        </div>
      </div>
      <div
        className={style.tab}
        style={
          toggleBtnState === 2 ? { display: "block" } : { display: "none" }
        }
      >
        <p className={style.description}>
          {" "}
          In our database you will find a list of verified NGOs with which we
          cooperate. You can check what they do, who they help and what they
          need.
        </p>
        <div>
          <div
            style={
              toggleTabState === 1 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>

          <div
            style={
              toggleTabState === 2 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>

          <div
            style={
              toggleTabState === 3 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>NGO page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>
          <div className={style.pagination}>
            <button
              style={
                toggleTabState === 1
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(1)}
            >
              1
            </button>
            <button
              style={
                toggleTabState === 2
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(2)}
            >
              2
            </button>
            <button
              style={
                toggleTabState === 3
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(3)}
            >
              3
            </button>
          </div>
        </div>
      </div>

      <div
        className={style.tab}
        style={
          toggleBtnState === 3 ? { display: "block" } : { display: "none" }
        }
      >
        <p className={style.description}>
          {" "}
          You can find local verified charities that accept donations.
        </p>
        <div>
          <div
            style={
              toggleTabState === 1 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 1</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>

          <div
            style={
              toggleTabState === 2 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 2</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>

          <div
            style={
              toggleTabState === 3 ? { display: "block" } : { display: "none" }
            }
          >
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity  page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
              <hr></hr>
            </div>
            <div className={style.outertab}>
              <div className={style.innertab}>
                <p className={style.orgName}>Charity page 3</p>
                <p className={style.orgThings}>things that are needed</p>
              </div>
              <p className={style.orgGoal}>Organization goal and mission</p>
            </div>
          </div>
          <div className={style.pagination}>
            <button
              style={
                toggleTabState === 1
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(1)}
            >
              1
            </button>
            <button
              style={
                toggleTabState === 2
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(2)}
            >
              2
            </button>
            <button
              style={
                toggleTabState === 3
                  ? { borderColor: "black" }
                  : { borderColor: "transparent" }
              }
              className={style.smallBtn}
              onClick={() => toggleTab(3)}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
