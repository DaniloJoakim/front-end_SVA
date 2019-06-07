<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Gerenciar meus Dados"
                sub="Cadastros" />
            <div class="admin-pages-tabs">
                <b-card no-body>
                    <b-tabs card>
                        <b-tab title="Meus Dados" active>
                            <ArticleAdmin/>
                        </b-tab>
                        <b-tab title="Minhas Vagas" >
                           <CategoryAdmin :load="load" />
                        </b-tab>
                        <b-tab title="Minhas Competências">
                             <UserAdmin/>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    data() {
        return {
             load: true,
        }
    },
    name: 'AdminPages',
    components: { PageTitle , ArticleAdmin, CategoryAdmin, UserAdmin}

}
</script>

<style>

</style>
