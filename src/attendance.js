const attendanceRecords = [];

module.exports = {
  recordAttendance: (record) => {
    attendanceRecords.push(record);
  },

  getAttendanceRecords: () => {
    return attendanceRecords;
  },
};