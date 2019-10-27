// add values here e.g. colour palette, breakpoints etc
const theme = {
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  colors: {
    lightGrey: `#D5D5D7`,
    lightGreyGreen: `#BAC7BE`,
    granite: `#627264`,
    olive: `#3A3C3F`,
    offWhite: `#FDFDFF`,
    ashGrey: `#B3B2B6`,
    mountbattenPink: `#A2708A`
  },
  breakpoints: [
    '768px', '1000px', '1300px', '1400px'
  ],
  boxShadow: `0px 2px 8px rgba(0, 0, 0, 0.3)`
}
// aliases
theme.breakpoints.sm = theme.breakpoints[0]
theme.breakpoints.md = theme.breakpoints[1]
theme.breakpoints.lg = theme.breakpoints[2]
theme.breakpoints.xl = theme.breakpoints[3]

export default theme
