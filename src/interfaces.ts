export interface DefValue {
  icon: string,
  key: string,
  class: string,
  callback(): void,
  href: string
}

export interface Definition {
  type: string,
  values?: DefValue[]
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
  sorting: HeaderSort
}

export interface TableData {
  fields: Field[],
  data: any[]
}
