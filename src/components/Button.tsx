import cx from 'clsx'

interface ButtonProps {
  className?: string
  text: string
  onClick: () => void
  isDisabled: boolean
}

export function Button({ className, text, onClick, isDisabled }: ButtonProps) {
  return (
    <button
      type={'button'}
      className={cx('revokeButton', className, { disabled: isDisabled })}
      disabled={isDisabled}
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}
