const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <img
      src={`${import.meta.env.BASE_URL}logo_psolver.png`}
      alt="pSolver Logo"
      className={className}
    />
  )
}

export default Logo
