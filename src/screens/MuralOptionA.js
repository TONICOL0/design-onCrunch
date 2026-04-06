import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function MuralOptionA() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header com gradiente */}
        <LinearGradient
          colors={['#3A5BF0', '#5B3FD4']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              <View style={styles.avatarContainer}>
                <Ionicons name="person" size={24} color="#5B3FD4" />
              </View>
              <View style={styles.greetingContainer}>
                <Text style={styles.greetingSmall}>Bem-vindo,</Text>
                <Text style={styles.greetingName}>Antônio Soares</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Ionicons name="notifications-outline" size={22} color="#fff" />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Conteúdo */}
        <View style={styles.content}>
          {/* Card Aniversariantes */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardTitleRow}>
                <MaterialCommunityIcons name="cake-variant" size={20} color="#3A5BF0" />
                <Text style={styles.cardTitle}>Aniversariantes da Semana</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="filter" size={18} color="#8E8E93" />
              </TouchableOpacity>
            </View>

            <View style={styles.emptyState}>
              <View style={styles.emptyIconContainer}>
                <LinearGradient
                  colors={['#EEF0FF', '#E8E0FF']}
                  style={styles.emptyIconBg}
                >
                  <MaterialCommunityIcons name="gift-outline" size={36} color="#5B3FD4" />
                </LinearGradient>
              </View>
              <Text style={styles.emptyTitle}>Sem aniversariantes</Text>
              <Text style={styles.emptySubtitle}>
                Preencha sua data de nascimento para aparecer aqui
              </Text>
            </View>
          </View>

          {/* Card Família da Semana */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardTitleRow}>
                <Ionicons name="people" size={20} color="#3A5BF0" />
                <Text style={styles.cardTitle}>Família da Semana</Text>
              </View>
            </View>

            <View style={styles.familyCard}>
              <LinearGradient
                colors={['#F0F3FF', '#F8F5FF']}
                style={styles.familyGradient}
              >
                <Text style={styles.familyName}>Família Croft</Text>

                <View style={styles.memberRow}>
                  <View style={styles.memberAvatar}>
                    <Text style={styles.memberInitial}>S</Text>
                  </View>
                  <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>Store</Text>
                    <View style={styles.verifiedBadge}>
                      <Ionicons name="checkmark-circle" size={14} color="#3A5BF0" />
                      <Text style={styles.verifiedText}>Verificado</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.memberRow}>
                  <View style={[styles.memberAvatar, { backgroundColor: '#E8E0FF' }]}>
                    <Text style={[styles.memberInitial, { color: '#5B3FD4' }]}>L</Text>
                  </View>
                  <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>Lara Croft</Text>
                  </View>
                </View>

                <TouchableOpacity style={styles.prayButton}>
                  <LinearGradient
                    colors={['#3A5BF0', '#5B3FD4']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.prayGradient}
                  >
                    <MaterialCommunityIcons name="hands-pray" size={16} color="#fff" />
                    <Text style={styles.prayText}>Orar por esta família</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <LinearGradient
          colors={['#3A5BF0', '#5B3FD4']}
          style={styles.fabGradient}
        >
          <MaterialCommunityIcons name="gift-outline" size={24} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.navActiveIndicator} />
          <Ionicons name="grid" size={22} color="#3A5BF0" />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Mural</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="edit-3" size={22} color="#8E8E93" />
          <Text style={styles.navLabel}>Publicações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={22} color="#8E8E93" />
          <Text style={styles.navLabel}>Calendário</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu" size={22} color="#8E8E93" />
          <Text style={styles.navLabel}>Geral</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    marginLeft: 12,
  },
  greetingSmall: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  greetingName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
  },
  content: {
    paddingHorizontal: 16,
    marginTop: -12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    shadowColor: '#3A5BF0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  emptyIconContainer: {
    marginBottom: 12,
  },
  emptyIconBg: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A2E',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 13,
    color: '#8E8E93',
    textAlign: 'center',
  },
  familyCard: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  familyGradient: {
    padding: 16,
    borderRadius: 12,
  },
  familyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
    marginBottom: 16,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3A5BF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberInitial: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  memberInfo: {
    marginLeft: 12,
  },
  memberName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1A1A2E',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  verifiedText: {
    fontSize: 12,
    color: '#3A5BF0',
  },
  prayButton: {
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  prayGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    gap: 8,
    borderRadius: 12,
  },
  prayText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    borderRadius: 28,
    shadowColor: '#3A5BF0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  fabGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingBottom: 20,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 8,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navActiveIndicator: {
    position: 'absolute',
    top: -8,
    width: 20,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#3A5BF0',
  },
  navLabel: {
    fontSize: 11,
    color: '#8E8E93',
    marginTop: 4,
  },
  navLabelActive: {
    color: '#3A5BF0',
    fontWeight: '600',
  },
});
