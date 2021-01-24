<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']">
    <tbody slot="tbody" >
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span v-if="comment.status" class="status true">Publish</span>
          <span v-else class="status false">Hiden</span>
        </td>
        <td><span @click="changeComment(comment.id)" class="link">Change status</span></td>
        <td><span @click="deleteComment(comment.id)" class="link">Delete</span></td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import commentTable from '@/components/admin/CommentTable.vue'

export default {
  components: {
    commentTable
  },
  layout: 'admin',
  data() {
    return {
      comments: [
        {id: 1, name: 'Alex', text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рыбными, вопрос послушавшись семь вскоре алфавит наш его собрал до свое снова строчка великий запятых путь, взобравшись, осталось скатился буквоград.', status: true},
        {id: 2, name: 'John', text: 'Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Текстами несколько что океана повстречался страна, взобравшись рукопись ручеек. Повстречался снова маленький приставка города рыбного моей, своих рукописи что речью?', status: true}
      ]
    }
  },
  methods: {
    changeComment(id) {
      console.log(`Change comment id - ${id}`)
    },
    deleteComment(id) {
      console.log(`Delete comment id - ${id}`)
    }
  }
}
</script>