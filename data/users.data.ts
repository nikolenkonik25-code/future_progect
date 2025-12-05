export const BASE_USER = {
  USERNAME: process.env.username!,
  PASSWORD: process.env.password!,
} as const;

export const Users = {
  lockedOutUser: "locked_out_user",
  problemuser: "problem_user",
  performanceGlitchUser: "performance_glitch_user",
  erroruser: "error_user",
  visualuser: "visual_user",
}