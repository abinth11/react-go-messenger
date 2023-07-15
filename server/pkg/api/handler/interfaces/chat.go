package interfaces

import "github.com/gin-gonic/gin"

type ChatHandler interface {
	GetRecentChats(ctx *gin.Context)
}
