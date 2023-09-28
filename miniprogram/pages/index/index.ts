// index.ts
// 获取应用实例
const app = getApp<IAppOption>();
console.log(app, 'getApp')
import $api from '../../api/index'

Page({
  data: {
    usePopup: false,
    visible: true,
    value: new Date(2022, 1, 15).getTime(),
    minDate: new Date(2022, 1, 1).getTime(),
    maxDate: new Date(2022, 2, 15).getTime(),
    format(day: { date: Date, suffix?: string, prefix?: string, className?: string }) {
      const { date } = day;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const curDate = date.getDate();

      // day.suffix = "¥60";
      if (year === 2022) {
        if (month === 2) {
          const map: Record<number, string> = {
            1: "初一",
            2: "初二",
            3: "初三",
            14: "情人节",
            15: "元宵节",
          };
          if (curDate in map) {
            // day.prefix = map[curDate];
            // day.suffix = "¥100";
            day.className = "t-calendar__dates-item--selected";
          }
        }
      }
      return day;
    },
  },

  onLoad() {
  },

  getInfo() {
    $api.userApi.getUserInfo({ username: 'demo', password: '123456' }).then((res) => {
      console.log(res, 'res')
    })
  }
});
