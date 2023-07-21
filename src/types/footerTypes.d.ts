export default interface Footer {
  title: string
    description: string
    explore: string
    links: {
      about: string
      projects: string
      skills: string
      contact: string
    },
    data: string
    dataDescription: string
    email: string
    form: {
      address: string
      subject: string
      message: string
      send: string
    }
}