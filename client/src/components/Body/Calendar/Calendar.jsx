import React from "react";
import styles from "./Calendar.module.css";

// export default function Calendar() {
//   return (
//     <div className={styles["calendar-component"]}>
//       <div className={styles["group-section"]}>
//         <div className={styles["top-border"]}></div>
//         <div className={styles["inner-container"]}>
//           <div className={styles["inline-availability-calendar"]}>
//             <div className={styles["header-container"]}>
//               <div className={styles["nights-location-container"]}>
//                 <section className={styles["nights-location-section"]}>
//                   <h2 className={styles["nights-location-text"]}>
//                     5 nights in Minot
//                   </h2>
//                 </section>
//               </div>
//               <div className={styles["date-range-container"]}>
//                 <div className={styles["date-range"]}>
//                   May 25, 2023 - May 30, 2023
//                 </div>
//               </div>
//             </div>
//             <div className={styles["calendars-container-1"]}>
//               <div className={styles["calendars-container-2"]}>
//                 <div className={styles["calendars-container-3"]}>
//                   <div className={styles["calendars-container-4"]}>
//                     <div className={styles["calendars-container-5"]}>
//                       <div className={styles["calendars-container-6"]}>
//                         <div className={styles["calendars-container-7"]}>
//                           <div className={styles["calendar-days-container"]}>
//                             <div className={styles["days-container"]}>
//                               <ul className={styles["days-list"]}>
//                                 <li className={styles.day}>Su</li>
//                                 <li className={styles.day}>Mo</li>
//                                 <li className={styles.day}>Tu</li>
//                                 <li className={styles.day}>We</li>
//                                 <li className={styles.day}>Th</li>
//                                 <li className={styles.day}>Fr</li>
//                                 <li className={styles.day}>Sa</li>
//                               </ul>
//                             </div>
//                             <div className={styles["days-container"]}>
//                               <ul className={styles["days-list"]}>
//                                 <li className={styles.day}>Su</li>
//                                 <li className={styles.day}>Mo</li>
//                                 <li className={styles.day}>Tu</li>
//                                 <li className={styles.day}>We</li>
//                                 <li className={styles.day}>Th</li>
//                                 <li className={styles.day}>Fr</li>
//                                 <li className={styles.day}>Sa</li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div className={styles["calendars-container-8"]}>
//                             <div className={styles["arrow-container"]}>
//                               <div className={styles["prev-arrow-container"]}>
//                                 <button className={styles["prev-arrow-button"]}>
//                                   <span className={styles["prev-arrow-span"]}>
//                                     &lt;
//                                   </span>
//                                 </button>
//                               </div>
//                               <div className={styles["next-arrow-container"]}>
//                                 <button className={styles["next-arrow-button"]}>
//                                   <span className={styles["next-arrow-span"]}>
//                                     &gt;
//                                   </span>
//                                 </button>
//                               </div>
//                               <div
//                                 className={styles["next-arrow-container"]}
//                               ></div>
//                             </div>
//                             <div className={styles["calendar-lean-section"]}>
//                               <div className={styles["calendar-wide-section"]}>
//                                 <div className={styles["prev-month-section"]}>
//                                   <div className={styles["month-container"]}>
//                                     <div className={styles["single-calendar-header-container"]}>
//                                       <div className={styles["date-arrow-container"]}>
//                                         <h3 className={styles["month-year"]}>April 2023</h3>
//                                       </div>
//                                     </div>
//                                     <table className={styles["days-table"]}>
//                                       <tbody className={styles["days-table-body"]}>
//                                         <tr className={styles["table-row"]}>
//                                           <td className={styles.td1}></td>
//                                           <td className={styles.td1}></td>
//                                           <td className={styles.td1}></td>
//                                           <td className={styles.td1}></td>
//                                           <td className={styles.td1}></td>
//                                           <td className={styles.td1}></td>
//                                           <td className={styles.td2}>
//                                             <div className={styles["td-div"]}></div>
//                                           </td>
//                                         </tr>
//                                         <tr className={styles["table-row"]}></tr>
//                                         <tr className={styles["table-row"]}></tr>
//                                         <tr className={styles["table-row"]}></tr>
//                                         <tr className={styles["table-row"]}></tr>
//                                         <tr className={styles["table-row"]}></tr>
//                                       </tbody>
//                                     </table>
//                                   </div>
//                                 </div>
//                                 <div className={styles["displayed-month-section"]}>
//                                   <div className={styles["month-container"]}>
//                                     <div className={styles["single-calendar-header-container"]}>
//                                       <div className={styles["date-arrow-container"]}>
//                                         <h3 className={styles["month-year"]}>May 2023</h3>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className={styles["displayed-month-section"]}></div>
//                                 <div className={styles["next-month-section"]}></div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




export default function Calendar() {
  return (
    <div className={styles["calendar-container"]}>
      <div className={styles["top-border"]}></div>
      <div className={styles["heading-container"]}>
        <div className={styles["nights-location-container"]}>
          <h2 className={styles["nights-location-heading"]}>
            5 nights in Minot
          </h2>
        </div>
        <div className={styles["date-range-container"]}>
          <div className={styles["date-range"]}>
            May 25, 2023 - May 30, 2023
          </div>
        </div>
      </div>
      <div className={styles["calendars-section"]}>
        <div className={styles["single-calendar-container"]}>
          <div className={styles["single-calendar-header"]}>
            {/* <div className={styles["header-left-arrow"]}>&lt;</div> */}
            <div className={styles["header-month"]}>May 2023</div>
          </div>
          <div className={styles["days-container"]}>
            <div className={styles["days-list"]}>
              <div className={styles.day}>Su</div>
              <div className={styles.day}>Mo</div>
              <div className={styles.day}>Tu</div>
              <div className={styles.day}>We</div>
              <div className={styles.day}>Th</div>
              <div className={styles.day}>Fr</div>
              <div className={styles.day}>Sa</div>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div className={styles["past-day"]}>1</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>2</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>3</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>4</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>5</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>6</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["past-day"]}>7</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>8</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>9</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>10</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>11</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>12</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>13</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["past-day"]}>14</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>15</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>16</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>17</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>18</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>19</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>20</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["past-day"]}>21</div>
                </td>
                <td>
                  <div className={styles["past-day"]}>22</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>23</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>24</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>25</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>26</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>27</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["present-future-day"]}>28</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>29</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>30</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>31</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles["single-calendar-container"]}>
          <div className={styles["single-calendar-header"]}>
            <div className={styles["header-month"]}>June 2023</div>
            {/* <div className={styles["header-right-arrow"]}>&gt;</div> */}
          </div>
          <div className={styles["days-container"]}>
            <div className={styles["days-list"]}>
              <div className={styles.day}>Su</div>
              <div className={styles.day}>Mo</div>
              <div className={styles.day}>Tu</div>
              <div className={styles.day}>We</div>
              <div className={styles.day}>Th</div>
              <div className={styles.day}>Fr</div>
              <div className={styles.day}>Sa</div>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <div className={styles["present-future-day"]}>1</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>2</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>3</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["present-future-day"]}>4</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>5</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>6</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>7</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>8</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>9</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>10</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["present-future-day"]}>11</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>12</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>13</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>14</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>15</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>16</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>17</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["present-future-day"]}>18</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>19</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>20</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>21</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>22</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>23</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>24</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles["present-future-day"]}>25</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>26</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>27</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>28</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>29</div>
                </td>
                <td>
                  <div className={styles["present-future-day"]}>30</div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles["bottom-section"]}>
        <img className={styles["keyboard"]} src="../../../../src/assets/keyboard.png" alt="keyboard" />
        <div className={styles["clear-dates"]}>Clear dates</div>
      </div>
    </div>
  );
}
