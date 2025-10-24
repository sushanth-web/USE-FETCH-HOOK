##Deployement LINK :-
https://assignment05tutedude.netlify.app/


1. Use of useState for managing state
data :- stores the fetched response.
loading :- tracks whether the request is in progress.
error :- stores any error message if the fetch fails.

Decision:- Splitting these states keeps concerns separate and makes the hook reusable and clear.

2. Use of useEffect for side effects
useEffect ensures the fetch runs whenever the url changes.

Decision: Using [url] as a dependency allows the hook to automatically fetch new data if the URL changes, making it dynamic.

3. Asynchronous fetch with async/await
fetchData is defined as an async function inside useEffect.
Decision: Using async/await improves readability over .then().catch(), making error handling and flow more straightforward.

4. Error handling
If response.ok is false, an error is thrown and caught in the catch block.

Decision: This ensures that network errors are properly handfled.

5. Loading state management
loading is set to true before the fetch starts and false in the finally block.

Decision: Guarantees that loading is correctly tracked regardless of whether the fetch succeeds or fails.

6. Return value
The hook returns an object: {data,loading, error}.

Decision: Returning an object instead of an array allows to use them in other files.
