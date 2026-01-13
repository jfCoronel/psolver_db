interface LogoProps {
  className?: string
}

const Logo = ({ className = "w-10 h-10" }: LogoProps) => {
  return (
    <img
      src="./logo_psolver.png"
      alt="pSolver Logo"
      className={className}
    />
  )
}

export default Logo
