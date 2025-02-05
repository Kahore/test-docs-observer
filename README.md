# Welcome to mobile challenge Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Reasoning and ideas

Since it's required to have `Maintainable and well-written code using good practices.` I decided to go with a DDD-like project architecture.
From my experience - this architecture allows for faster feature development compared to others. As well as change part of a code due to new requirements.
The reasons for this are:
- Low coupling and high cohesion. Each layer can be tested isolated from others. 
- Small and light classes - low cognitive load.
- Logic spread between layers that allow to detect where issue came from quite fast.
              
Here is how its possible:
- **Data** folder - contains everything that need to work with api (rest, ws, grpc, graphql)
   - repositories hold raw data from the backend. I'm not keeping notifications there cuz it's usually (real apps) not needed. But the rest of the data could be used for local caching. Let's say after making a POST request, we can update the local cache in the repository.
   - Either - is a monad function that allow to handle errors in a better way. Let's say due more complicated logic you need to check value from backend and declare them as error or defected. Without monad this would be quite challenging.
- **Domain** folder - here is the converter to frontend entity. For this particular project it's an overkill. But the goal is to have a `scalable application`. So this structure provides a solid foundation.
  - ViewAdapters is an adapters to VM. Formatting, grouping and etc for particular UI needs 
- **Mappers** folder - here is the factory-like converter. For this particular project it's an overkill. Normally it's just hiding how exactly backend's dto converting to domain. As well as here we convert domain back to dto for PATCH and POST. 
- **Services** folder - business logic. In this project is only sorting, but could be more - like validations, calculations and etc.
- **ViewModels** folder - connector to the screen. Also, could contain a shared logic that going to be used in many screens.

As you can see each layer have its own purposes. 
Of course for real apps devs have to deal with logic leaking between layers. And that could be difficult for juniors.

## How to execute code and run the tests
1. Install dependencies

   ```bash
   npm install
   ```
2. Start the app

   ```bash
    npx expo start
   ```
3. Start the local server
   ```bash
    cd server
   ``` 
     ```bash
     go run server.go
   ```          
### Run tests
   ```bash
   npm run test
   ```

### Run app (Android)
For Android we need 
- Device ```adb reverse tcp:8081 tcp:8081```
- Local backend ```adb reverse tcp:8080 tcp:8080```
             
Then I just pressed `a` to open project with `EXPO` (no dev apk)

            
## Third party libraries usage
- axios - A widely used rest api provider. Still a good one.
- dayjs - manipulating with dates and format them without a headache
- dioma - DI container. Simple and light. For this project its overkill, but again - we aim for scalable application here.
- mobx - In my experience this is very good state management library.
