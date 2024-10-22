import mongoose, { isValidObjectId } from "mongoose";
import { Subscription } from "../models/subscription.model.js";
import { Video } from "../models/video.model.js";
import { ApiError } from "../utilis/ApiError.js";
import { ApiResponse } from "../utilis/ApiResponse.js";
import { asyncHandlar } from "../utilis/asyncHandlar.js";




const getChannelStats = asyncHandlar(async(req,res)=>{
    // aggregte

    const userId = req.user?._id;

    const totalSubscribers = await Subscription.aggregate([
        {
            $match: {
                channel: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $group: {
                _id: null,
                subscribersCount: {
                    $sum: 1
                }
            }
        }
    ]);

    const video = await Video.aggregate([
        {
            $match: {
                owner: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: "likes",
                localField: "_id",
                foreignField: "video",
                as: "likes"
            }
        },
        {
            $project: {
                totalLikes: {
                    $size: "$likes"
                },
                totalViews: "$views",
                totalVideos: 1
            }
        },
        {
            $group: {
                _id: null,
                totalLikes: {
                    $sum: "$totalLikes"
                },
                totalViews: {
                    $sum: "$totalViews"
                },
                totalVideos: {
                    $sum: 1
                }
            }
        }
    ]);

    const channelStats = {
        totalSubscribers: totalSubscribers[0]?.subscribersCount || 0,
        totalLikes: video[0]?.totalLikes || 0,
        totalViews: video[0]?.totalViews || 0,
        totalVideos: video[0]?.totalVideos || 0
    };

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                channelStats,
                "channel stats fetched successfully"
            )
        );



})

const getChannelVideos = asyncHandlar(async(req,res)=>{
// aggregate

const userId = req.user?._id;

const videos = await Video.aggregate([
    {
        $match: {
            owner: new mongoose.Types.ObjectId(userId)
        }
    },
    {
        $lookup: {
            from: "likes",
            localField: "_id",
            foreignField: "video",
            as: "likes"
        }
    },
    {
        $addFields: {
            createdAt: {
                $dateToParts: { date: "$createdAt" }
            },
            likesCount: {
                $size: "$likes"
            }
        }
    },
    {
        $sort: {
            createdAt: -1
        }
    },
    {
        $project: {
            _id: 1,
            "videoFile.url": 1,
            "thumbnail.url": 1,
            title: 1,
            description: 1,
            createdAt: {
                year: 1,
                month: 1,
                day: 1
            },
            isPublished: 1,
            likesCount: 1
        }
    }
]);

return res
.status(200)
.json(
    new ApiResponse(
        200,
        videos,
        "channel stats fetched successfully"
    )
);
})



export {
   getChannelStats,
   getChannelVideos
}