## DB Structure
- Shop
    + Menu:
        + category: string
        + name: string
        + price: object
            + hot: int
            + cold: int
            + general: int
        + description: string
        + img_link: string
    + Grocery:
        + category: string
        + name: string
        + price: int
        + description: Array[string]
        + img_link: string
- Location
    + Store
- Posts

## Additional feature
- Users
- Language
