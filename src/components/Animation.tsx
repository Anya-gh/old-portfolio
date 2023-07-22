import { Dispatch, SetStateAction } from 'react'

export type Animator = {
  initial: object,
  animate: object,
  exit: object
}

export interface AnimatorProps {
  landingAnimation: Animator,
  setLandingAnimation: Dispatch<SetStateAction<Animator>>
  showcaseAnimation: Animator,
  setShowcaseAnimation: Dispatch<SetStateAction<Animator>>,
  aboutAnimation: Animator,
  setAboutAnimation: Dispatch<SetStateAction<Animator>>,
  contactAnimation: Animator,
  setContactAnimation: Dispatch<SetStateAction<Animator>>
}

export interface AnimatorPropsWithTags extends AnimatorProps {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>
}