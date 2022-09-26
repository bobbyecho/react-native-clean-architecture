import React from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import type { Article } from "../../domain/model/articleModel";
import useArticles from "../useArticles";
import ArticleItem from "./ArticleItem";

const ArticleList = () => {
  const {fetchArticles, articleState} = useArticles()

  React.useEffect(() => {
    refresh()
  }, [])

  const refresh = () => {
    fetchArticles()
  }

  const renderItem = ({item}: ListRenderItemInfo<Article>) => {
    return (
      <ArticleItem item={item}/>
    )
  }

  if (articleState.loading) {
    return <Text>Loading...</Text>
  }

  return (
    <FlatList
      data={articleState.data}
      renderItem={renderItem}
      onRefresh={refresh}
      refreshing={articleState.loading}
    />
  )
}

export default ArticleList