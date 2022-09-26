import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { Article } from "../../domain/model/articleModel";

type ArticleItemProps = {
  item: Article
}

type ArticleFieldProps = {
  title: string;
  body: string;
}

const Field: React.FC<ArticleFieldProps> = ({body, title}) => {
  return (
    <View style={styles.field}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </View>
  )
}

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
  return (
    <View style={styles.section}>
      <Field title="author" body={item.author || "unknown"} />
      <Field title="title" body={item.title} />
      <Field title="description" body={item.description} />
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15
  },
  field: {
    marginBottom: 5
  },
  title: {
    fontWeight: 'bold'
  }
})

export default ArticleItem