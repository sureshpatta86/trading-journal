import React from 'react'
import LogoIcon from './LogoIcon'

interface LoadingSpinnerProps {
  size?: number
  className?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 48,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="animate-pulse">
        <LogoIcon size={size} />
      </div>
    </div>
  )
}

export default LoadingSpinner
