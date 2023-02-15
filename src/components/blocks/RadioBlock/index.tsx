import {
  RadioBlockWrapper,
  RadioInputLabel,
  RadioBlockHeader,
  RadioBlockColumn,
  RadioBlockBody,
  RadioControl,
  RadioInput,
} from './style'
import AppIcon from '@/components/blocks/AppIcon'
import { Icon } from '@/components/types'
import logoPlaceholderImage from '@/assets/images/logo-placeholder.svg'
import { MouseEventHandler } from 'react'

interface RadioBlockProps {
  /**
   * Name of input
   * @default N/A
   */
  name: string
  /**
   * Field value
   * @default N/A
   */
  fieldValue?: string
  /**
   * Optional logos
   * @default []
   */
  logos?: Icon[] | undefined
  /**
   * Set selected state
   * @default false
   */
  selected?: boolean
  onChange: MouseEventHandler<HTMLButtonElement>
}

export default function RadioBlock({
  name = '',
  fieldValue = '',
  logos = [{ iconUrl: logoPlaceholderImage }],
  selected = false,
}: RadioBlockProps) {
  const logoIcons = logos?.map((logo) => <AppIcon icon={logo} />)

  return (
    <RadioBlockWrapper>
      <RadioInputLabel selected={selected}>
        <RadioBlockColumn>
          {logoIcons.length > 0 && (
            <RadioBlockHeader>{logoIcons}</RadioBlockHeader>
          )}

          <RadioBlockBody>Choose another host</RadioBlockBody>
        </RadioBlockColumn>

        <RadioBlockColumn>
          <RadioInput
            selected={selected}
            name={name}
            value={fieldValue}
            type="radio"
          />
          <RadioControl />
        </RadioBlockColumn>
      </RadioInputLabel>
    </RadioBlockWrapper>
  )
}
