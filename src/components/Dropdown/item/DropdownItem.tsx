import classNames from 'classnames'
import { Option } from '../interfaces'
import styles from './DropdownItem.module.scss'

interface DropdownItemProps {
  option: Option
  onClick?: React.MouseEventHandler<HTMLDivElement>
  searchQuery?: string
}

const DropdownItem = ({ option, onClick, searchQuery }: DropdownItemProps) => {
  const itemClassNames = classNames(styles.container, {})
  // const getCroppedTitle = () =>{
  //   opt 
  // }
  return (
    <div className={itemClassNames} onClick={onClick}>
      {option.icon && (
        <img className={styles.container__icon} src={option.icon} alt="icon" />
      )}
      <span className={styles.container__title}>
        <span className={styles.container__title__match}>{option.label.substring(0,searchQuery?.length??0)}</span>
        <span className={styles.container__title__crop}>{option.label.substring(searchQuery?.length??0)}</span>
      </span>
      <span className={styles.container__subtitle}>{option.subLabel}</span>
    </div>
  )
}

export { DropdownItem }
