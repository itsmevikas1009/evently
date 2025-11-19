// Define a utility function to handle asynchronous middleware
const asyncHandler = (requestHandler) => (req, res, next) => {
    // Resolve the promise returned by the request handler and catch any errors
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
}

// Export the asyncHandler function for use in other modules
export { asyncHandler }

// The following are commented-out alternative implementations of asyncHandler

// const asyncHandler = () => { }
// const asyncHandler = (func) => () => { }
// const asyncHandler = (func) => { () => { } }
// const asyncHandler = (func) => { async () => { } }

// Another alternative implementation of asyncHandler
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }
