export interface DefinitionValue {
  icon: string,
  key: string,
  class: string,
  callback(): void,
  href: string
}

export interface Definition {
  type: string,
  values?: DefinitionValue[]
}

export interface Filter {
  type: string
}

export interface HeaderSort {
  key: string,
  value: number
}

export interface Field {
  title: string,
  key: string,
  filter: Filter | boolean,
  definition: Definition,
  sorting: HeaderSort | boolean
}

export interface TableData {
  fields: Field[],
  data: any[]
}
