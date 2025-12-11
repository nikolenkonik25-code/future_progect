export const BASE_USER = {
  USERNAME: "standard_user",
  PASSWORD: process.env.PASSWORD!,
} as const;


export const Users = {
  lockedOutUser: "locked_out_user",
  problemuser: "problem_user",
  performanceGlitchUser: "performance_glitch_user",
  erroruser: "error_user",
  visualuser: "visual_user",
}