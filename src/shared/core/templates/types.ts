export type Info = {
  title: string
  text: string
}
export interface TemplateType {
  id: string
  benefits: Info[]
  tips: Info[]
  name: string
  description: string
  previewText: string
  bgImage: string
  bgColor: string
  createdAt: string
}
