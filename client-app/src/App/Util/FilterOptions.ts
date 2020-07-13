export const salaryOptions = [
  { key: "s1", text: "Up to £10000", value: 10000 },
  { key: "s2", text: "£12000", value: 12000 },
  { key: "s3", text: "£14000", value: 14000 },
  { key: "s4", text: "£18000", value: 18000 },
  { key: "s5", text: "£25000", value: 25000 },
  { key: "s6", text: "£30000", value: 30000 },
  { key: "s7", text: "£35000", value: 35000 },
  { key: "s8", text: "£40000", value: 40000 },
  { key: "s9", text: "£45000", value: 45000 },
  { key: "s10", text: "£50000", value: 50000 },
  { key: "s11", text: "£55000", value: 55000 },
  { key: "s12", text: "£75000", value: 75000 },
  { key: "s13", text: "£100000", value: 100000 },
];

const anytime = new Date(Date.now());
const today = new Date(Date.now());
const lastThreeDays = new Date(Date.now());
const lastWeek = new Date(Date.now());
const lastTwoWeeks = new Date(Date.now());
//dateTime.setFullYear(dateTime.getFullYear() + 1);
const changeReq = (data: Date, days: number) => {
  const date = new Date(data.setDate(data.getDate() + days));
  return date.toString();
};

export const timeAdded = [
  { key: "anytime", text: "Anytime", value: changeReq(anytime, -365) },
  { key: "today", text: "Today", value: changeReq(today, -1) },
  {
    key: "last three days",
    text: "Last three days",
    value: changeReq(lastThreeDays, -3),
  },
  { key: "last week", text: "Last week", value: changeReq(lastWeek, -7) },
  {
    key: "last two weeks",
    text: "Last two weeks",
    value: changeReq(lastTwoWeeks, -14),
  },
];

export const contractType = [
  { text: "Permanent", value: "Permanent" },
  { text: "Contract", value: "Contract" },
  { text: "Temporary", value: "Temporary" },
];

export const imageSelector = [
  { key: 1, value: "/assets/reedTechnology.png" },
  { key: 2, value: "/assets/reedBussiness.png" },
  { key: 3, value: "/assets/reedEngine.png" },
  { key: 4, value: "/assets/reedProcurement.png" },
  { key: 5, value: "/assets/reedAcc.png" },
  { key: 0, value: "/assets/reedLogo2.png" },
];
<<<<<<< HEAD

export const employerSelector = [
  { key: 1, text: "hays", value: "/assets/hays.png" },
  { key: 2, text: "the training room", value: "/assets/trainingroom.png" },
  { key: 3, text: "tradewind", value: "/assets/tradewind.png" },
  { key: 4, text: "rise", value: "/assets/rise.png" },
  { key: 5, text: "prospero", value: "/assets/prospero.png" },
  {
    key: 0,
    text: "teaching personnel",
    value: "/assets/teachingpersonnel.png",
  },
  {
    key: 6,
    text: "academics",
    value: "/assets/academics.png",
  },
  {
    key: 7,
    text: "NHS National Services Scotland",
    value: "/assets/nhsscotland.png",
  },
  {
    key: 8,
    text: "NHS Business Services Authority Jobs",
    value: "/assets/nhsjobs.png",
  },
];
=======
>>>>>>> a2214b3465e962731657981ae8b86b74048109a0
