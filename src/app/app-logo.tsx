import Image from 'next/image'
import { motion } from 'framer-motion'
import { logo } from './cn'

const AppLogo = () => (
  <motion.img
    src="/logo.svg"
    alt="Logo"
    width={24}
    height={24}
    className={logo.image}
    whileHover={{ rotate: -180, borderRadius: "100%" }}
  />
)

export default AppLogo
